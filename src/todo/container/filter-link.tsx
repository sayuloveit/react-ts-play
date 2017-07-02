import {connect} from 'react-redux';
import {setVisibilityFilter} from '../action';
import {Link} from '../component/link';

const mapStateToProps = (state: ITodoState, ownProps: ITodoFilter) => ({
    active: ownProps.filter === state.visibilityFilter.filter
});

const mapDispatchToProps = (dispatch: any, ownProps: ITodoFilter) => ({
    onClick: () => {
        // todo: add filter strings as types to prevent any cast
        dispatch(setVisibilityFilter({
            filter: ownProps.filter
        } as any));
    }
});

export const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link as any);
