export const initialState = {
  count: 0,
  idUpdate: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "EMPLOYE_AJOUTERCOUNT":
      return {
        count: state.count + 1,
      };
    case "EMPLOYE_SUPPRIMERCOUNT":
      return {
        count: state.count - 1,
      };
    case "EMPLOYE_MODIFER":
      return {
        idUpdate: action.item,
      };

    default:
      return state;
  }
};
export default reducer;
