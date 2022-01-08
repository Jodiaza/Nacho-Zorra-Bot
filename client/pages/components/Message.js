const Message = (props) => (
    <div className="row">
        <div className="col-sm-12 col-md-8 offset-md-2 offset-lg-3">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        {props.speaks === 'bot' && 
                        <div className="col-sm-2">
                            <button type="button" class="btn btn-outline-primary">{props.speaks}</button>
                        </div>
                        }
                        <div className="col-sm-10">
                            <span className="text-primary">
                                {props.text}
                            </span>
                        </div>
                        {props.speaks === 'Yo' && 
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-outline-primary">{props.speaks}</button>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Message;