import PropTypes from 'prop-types';

const accountOverviewStubPropTypes = {
    supportContact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        baseUrlImg: PropTypes.string.isRequired,
    }).isRequired,
    salesOverview: PropTypes.shape({
        uploads: PropTypes.number.isRequired,
        successfulUploads: PropTypes.number.isRequired,
        linesAttempted: PropTypes.number.isRequired,
        linesSaved: PropTypes.number.isRequired,
        lastUploadDate: PropTypes.number.isRequired,
    }).isRequired,
};

export default accountOverviewStubPropTypes;
