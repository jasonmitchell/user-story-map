import {generateId} from 'id';
import {actions as cardActions} from 'components.old/Cards';

function shiftCardsOfType(cards, type, index, filter) {
  cards.filter(x => x.id.indexOf(type) === 0 && x.index >= index && (!filter || filter(x))).forEach(card => {
    card.index += 1;
  });
};

function resequenceCards(cards) {
  let index = 0;

  cards.sort((a, b) => a.index - b.index).forEach(x => {
    x.index = index++;
  })
};

function findCardIndices(cards, predicate) {
  const indices = [];

  cards.forEach((card, index) => {
    if (predicate(card) === true) {
      indices.push(index);
    }
  })

  return indices;
};

function deleteActivity (draft, activityId) {
  const activityIndex = draft.cards.findIndex(x => x.id === activityId);
  const activity = draft.cards[activityIndex];
  const taskIds = findCardIndices(draft.cards, x => x.activityId === activity.id).map(x => draft.cards[x].id);

  taskIds.forEach(taskId => {
    deleteTask(draft.cards, taskId);
  });

  draft.cards.splice(activityIndex, 1);
}

const deleteTask = (draft, taskId) => {
  const taskIndex = draft.cards.findIndex(x => x.id === taskId);
  const task = draft.cards[taskIndex];
  const storyIndices = findCardIndices(draft.cards, x => x.taskId === taskId);

  storyIndices.forEach(x => {
    draft.cards.splice(x, 1);
  });

  draft.cards.splice(taskIndex, 1);

  return task;
}

function deleteRelease(draft, releaseId) {
  const releaseIndex = draft.releases.findIndex(x => x.id === releaseId);
  const releaseToMoveStoriesTo = draft.releases[releaseIndex < draft.releases.length - 1 ? releaseIndex + 1 : releaseIndex - 1];

  draft.releases.splice(releaseIndex, 1);

  let index = draft.cards.filter(x => x.releaseId === releaseToMoveStoriesTo.id).length;
  draft.cards.filter(x => x.releaseId === releaseId).forEach(card => {
    card.releaseId = releaseToMoveStoriesTo.id;
    card.index = index++;
  })
}

function moveReleaseUp(draft, releaseId) {
  const releaseIndex = draft.releases.findIndex(x => x.id === releaseId);
  if (releaseIndex === 0) {
    return;
  }

  const release = draft.releases[releaseIndex];
  const releaseToSwap = draft.releases[releaseIndex - 1];

  draft.releases[releaseIndex - 1] = release;
  draft.releases[releaseIndex] = releaseToSwap;
}

function moveReleaseDown(draft, releaseId) {
  const releaseIndex = draft.releases.findIndex(x => x.id === releaseId);
  if (releaseIndex === draft.releases.length - 1) {
    return;
  }

  const release = draft.releases[releaseIndex];
  const releaseToSwap = draft.releases[releaseIndex + 1];

  draft.releases[releaseIndex + 1] = release;
  draft.releases[releaseIndex] = releaseToSwap;
}

export function reducer(draft, action) {
  switch (action.type) {
    case cardActions.ADD_ACTIVITY:
      shiftCardsOfType(draft.cards, 'activity', action.activityIndex);

      draft.cards.push({
        id: `activity-${generateId()}`,
        type: 'activity',
        title: '',
        index: action.activityIndex
      });
      break;

    case cardActions.ADD_TASK:
      const activityTaskFilter = x => x.activityId === action.activityId;
      shiftCardsOfType(draft.cards, 'task', action.taskIndex, activityTaskFilter);

      draft.cards.push({
        id: `task-${generateId()}`,
        type: 'task',
        activityId: action.activityId,
        title: '',
        index: action.taskIndex
      });
      break;

    case cardActions.ADD_STORY:
      const releaseStoryFilter = x => x.taskId === action.taskId && x.releaseId === action.releaseId;
      shiftCardsOfType(draft.cards, 'story', action.storyIndex, releaseStoryFilter);

      draft.cards.push({
        id: `story-${generateId()}`,
        type: 'story',
        releaseId: action.releaseId,
        taskId: action.taskId,
        title: '',
        index: action.storyIndex
      });
      break;

    case cardActions.UPDATE_CARD:
      const card = draft.cards.find(x => x.id === action.cardId);
      card.title = action.title;
      break;

    case cardActions.DELETE_ACTIVITY:
      deleteActivity(draft, action.cardId);
      resequenceCards(draft.cards.filter(x => x.type === 'activity'));
      break;

    case cardActions.DELETE_TASK:
      const task = deleteTask(draft, action.cardId);
      resequenceCards(draft.cards.filter(x => x.activityId === task.activityId));
      break;

    case cardActions.DELETE_STORY:
      const storyIndex = draft.cards.findIndex(x => x.id === action.cardId);
      const story = draft.cards[storyIndex];

      draft.cards.splice(storyIndex, 1);
      resequenceCards(draft.cards.filter(x => x.taskId === story.taskId && x.releaseId === story.releaseId));
      break;

    case cardActions.SELECT_CARD:
      draft.selectedCardId = action.cardId;
      break;

    case cardActions.CLEAR_SELECTED_CARD:
      draft.selectedCardId = null;
      break;

    case 'add-release':
      draft.releases.splice(action.index, 0, {
        id: generateId(),
        name: ''
      })
      break;

    case 'update-release':
      const release = draft.releases.find(x => x.id === action.releaseId);
      release.name = action.name;
      break;

    case 'delete-release':
      deleteRelease(draft, action.releaseId);
      break;

    case 'move-release-up':
      moveReleaseUp(draft, action.releaseId);
      break;

    case 'move-release-down':
      moveReleaseDown(draft, action.releaseId);
      break;

    default:
      throw new Error('Unknown action type')
  }
}

export const initialState = {
  releases: [
    {
      id: `release-${generateId()}`,
      name: 'Backlog'
    }
  ],
  cards: []
}
