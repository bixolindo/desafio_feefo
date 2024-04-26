import React, { useEffect, useState } from "react";
import { Container } from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faUpload } from '@fortawesome/free-solid-svg-icons';
import theme from '../../theme'

export const Sales = ({ salesOverview }) => {
    const [uploads, setUploads] = useState(salesOverview.successfulUploads);
    const [linesAdd, setlinesAdd] = useState(salesOverview.linesSaved);
    const [date, setdate] = useState(new Date(salesOverview.lastUploadDate));

    useEffect(() => {
        setUploads(salesOverview.successfulUploads);
        setlinesAdd(salesOverview.linesSaved);
        setdate(new Date(salesOverview.lastUploadDate));
    }, [salesOverview]);

    return (
        <Container role="region" aria-labelledby="sales-heading" data-testid="sales-container">
            <div className="sales-header">
                <span id="sales-heading" data-testid="sales-heading">
                    <FontAwesomeIcon color={theme.blue_icon} icon={faUpload} />
                    Sales
                </span>
                <FontAwesomeIcon
                    title={`Last upload in ${date.toLocaleDateString('en-US')}`}
                    className="tip"
                    color={theme.text_secondary}
                    icon={faInfoCircle}
                    aria-label={`Last upload in ${date.toLocaleDateString('en-US')}`}
                    data-testid="upload-info-icon"
                />
            </div>
            <div className="sales-values">
                You had <b data-testid="uploads">{uploads}</b> Uploads and <b data-testid="lines-added">{linesAdd}</b> lines added.
            </div>
        </Container>
    )
}

export default Sales;
