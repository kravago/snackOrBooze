import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText,
         Form, FormGroup, Label, Input, Button } from "reactstrap";
import SnackOrBoozeApi from './Api';

function CreateMenu({updateSnacks, updateDrinks}) {
  const initialState = {
    name: "",
    description: "",
    recipe: "",
    serve: ""
  }

  const [formData, setFormData] = useState(initialState);
  const [itemType, setItemType] = useState("drinks");

  const handleChange = (e) => {
    const {name, value} = e.target;
      setFormData(formData => ({
        ...formData,
        [name]: value
      }));
  }

  const handleTypeChange = (e) => {
    const {value} = e.target;
    setItemType(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newItem = {...formData, id: formData.name };
    await SnackOrBoozeApi.postItem(newItem, itemType);
    if (itemType === 'snacks') {
      updateSnacks(newItem);
    } else {
      updateDrinks(newItem);
    }
    setFormData(initialState);
    setItemType("drinks");
    alert("Form submitted successfully!");
  }


  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Add Menu Item
          </CardTitle>
          <CardText className="font-italic">Add a drink or snack:</CardText>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="type">Type of Item</Label>
            <Input 
              type="select" 
              name="type" 
              id="type" 
              onChange={handleTypeChange}
              value={itemType}>
              <option value="drinks" defaultValue>Drink</option>
              <option value="snacks">Snack</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input 
              type="text" 
              name="name" 
              id="name" 
              onChange={handleChange} 
              value={formData.name}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Description</Label>
            <Input 
              type="text" 
              name="description" 
              id="Description" 
              onChange={handleChange} 
              value={formData.description}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="Recipe">Recipe</Label>
            <Input 
              type="text" 
              name="recipe" 
              id="Recipe" 
              onChange={handleChange} 
              value={formData.recipe}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="serve">Serve</Label>
            <Input 
              type="text" 
              name="serve" 
              id="serve" 
              onChange={handleChange} 
              value={formData.serve}
            />
          </FormGroup>
          <Button>Add</Button>
        </Form>
        </CardBody>
      </Card>
    </section>
  );

}

export default CreateMenu;
