const TripDetails = () => {
    return <div style={{padding: '1em', marginBottom: '80px'}}>
        <div className="preview-wrapper">
            <div className="preview-image-container">
                    <img src={placeholder} alt="Preview Image" />
                    <div className="preview-trip-bubble preview-location">
                        <p>Lolland - Bornholm</p>
                    </div>
                </div>
                <div className="description-wrapper">
                    <div>
                        <h3>Den grimme perle</h3>
                        <span>15 nov - 1 dec </span>
                        <span>· 0 stops</span>
                        <div className="hashtag-container">
                            <div className="preview-trip-bubble hashtag">
                                <p>smoke-free</p>
                            </div>
                            <div className="preview-trip-bubble hashtag">
                                <p>ø-hop</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="preview-trip-bubble">
                            <p>$40</p>
                            <span>per day</span>
                        </div>
                    </div>
                </div>
            </div>
      </div>;
  };
  
  export default TripDetails;