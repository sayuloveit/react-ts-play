import { connect } from 'react-redux';
import { setVisibilityFilter } from '../action';
import { Link } from '../component/link';

const mapStateToProps = (state: ITodoState, ownProps: ITodoFilter) => ({
  active: ownProps.filter === state.visibilityFilter.filter
});

const mapDispatchToProps = (dispatch: any, ownProps: ITodoFilter) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  }
});

export const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link as any);
