export const FETCH_PROJECT_DETAILS = 'FETCH_PROJECT_DETAILS';
export const FETCH_PROJECT_DETAILS_SUCCESS = 'FETCH_PROJECT_DETAILS_SUCCESS';

export const SHOW_SUBPROJECT_DIALOG = 'SHOW_SUBPROJECT_DIALOG';
export const SHOW_SUBPROJECT_DIALOG_SUCCESS = 'SHOW_SUBPROJECT_DIALOG_SUCCESS';

export const CREATE_SUBPROJECT_ITEM = 'CREATE_SUBPROJECT_ITEM';
export const CREATE_SUBPROJECT_ITEM_SUCCESS = 'CREATE_SUBPROJECT_ITEM_SUCCESS';
export const SUBPROJECT_NAME = 'SUBPROJECT_NAME';
export const SUBPROJECT_AMOUNT = 'SUBPROJECT_AMOUNT';
export const SUBPROJECT_COMMENT = 'SUBPROJECT_COMMENT';
export const SUBPROJECT_CURRENCY = 'SUBPROJECT_CURRENCY';

export function fetchProjectDetails(project) {
  return {
    type: FETCH_PROJECT_DETAILS,
    project
  }
}

export function storeSubProjectName(name) {
  return {
    type: SUBPROJECT_NAME,
    name: name
  }
}

export function createSubProjectItem(parentName, subProjectName, subProjectAmount, subProjectComment, subProjectCurrency) {
  return {
    type: CREATE_SUBPROJECT_ITEM,
    parentName: parentName,
    subProjectName: subProjectName,
    subProjectAmount: subProjectAmount,
    subProjectComment: subProjectComment,
    subProjectCurrency: subProjectCurrency
  }
}

export function showWorkflowDialog(show) {
  return {
    type: SHOW_SUBPROJECT_DIALOG,
    show: show
  }
}

export function storeSubProjectAmount(amount) {
  return {
    type: SUBPROJECT_AMOUNT,
    amount: amount
  }
}

export function storeSubProjectCurrency(currency) {
  return {
    type: SUBPROJECT_CURRENCY,
    currency: currency
  }
}

export function storeSubProjectComment(comment) {
  return {
    type: SUBPROJECT_COMMENT,
    comment: comment
  }
}
