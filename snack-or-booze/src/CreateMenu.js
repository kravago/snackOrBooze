import React from "react";
import { Redirect } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText,
         Form, FormGroup, Label, Input, Button } from "reactstrap";

function CreateMenu() {

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Add Menu Item
          </CardTitle>
          <CardText className="font-italic">Add a drink or snack:</CardText>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <Button>Add</Button>
        </Form>
        </CardBody>
      </Card>
    </section>
  );

}

export default CreateMenu;
