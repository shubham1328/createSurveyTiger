import { Button
    ,InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';


function SingleSelect() {
    return (
      
        <div className="question-container">
            <InputGroup>
                <InputGroupAddon addonType="append">
                    <InputGroupText>?</InputGroupText>
                    </InputGroupAddon>
                <Input placeholder="Your Question" />
            </InputGroup >
            
            <p className="option-text">Options</p>
            <InputGroup className="input-grp">
            <Input placeholder="Option 1" />
                <InputGroupAddon addonType="append">
                <InputGroupText>+ -</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <br/>
      <InputGroup className="input-grp">
      
        <Input placeholder="Option 2" />
        <InputGroupAddon addonType="prepend">
          <InputGroupText>+ -</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <div className="questions-buttons">
       <Button className="survey-main-btn">Add Question</Button>
         <Button className="survey-main-btn">Publish</Button>
      </div>
        </div>
            
    );
  }
  
  export default SingleSelect;