import React, { useEffect, useState } from "react";
import { Container } from './styles';
import Sales from "../sales/sales";
import PercentageText from "../percentage-text/percentage-text";
import PropTypes from 'prop-types';

export const Dashboard = ({ salesOverview }) => {
    const [uploadSuccess, setUploadSuccess] = useState(0);
    const [linesSaved, setLinesSaved] = useState(0);

    useEffect(() => {
        calculatePercentages();
    }, [salesOverview]);
    
    const calculatePercentages = () => {
        calculateUploadSuccess();
        calculateLinesSavedPercentage();
    }

    const calculateUploadSuccess = () => {
        let upSuccess = (salesOverview.successfulUploads * 100) / salesOverview.uploads;
        setUploadSuccess(upSuccess);
    }

    const calculateLinesSavedPercentage = () => {
        let linesSavedPercentage = (salesOverview.linesSaved * 100) / salesOverview.linesAttempted;
        setLinesSaved(linesSavedPercentage);
    }

    return (
        <Container role="main" aria-labelledby="dashboard-heading">
            <Sales salesOverview={salesOverview} data-testid="sales-component" />
            <div className="percentage-area"  aria-label="Info about Uploads">
                <PercentageText label="Upload Success" percentage={uploadSuccess} percentage_text={"Upload Success"} data-testid="upload-success" />
                <PercentageText label="Lines Saved" percentage={linesSaved} percentage_text={"Lines Saved"} data-testid="lines-saved" />
            </div>
        </Container>
    )
}

Dashboard.propTypes = {
    salesOverview: PropTypes.shape({
        uploads: PropTypes.number.isRequired,
        successfulUploads: PropTypes.number.isRequired,
        linesAttempted: PropTypes.number.isRequired,
        linesSaved: PropTypes.number.isRequired,
        lastUploadDate: PropTypes.number.isRequired,
    }).isRequired
}

export default Dashboard;
