// Functional component - just shows the H1 tag.
const React = require('react')
class Show extends React.Component {
  render () {
   const fruit = this.props.fruit
    return (
      <div>
      <h1> Show Page </h1>

      <p className="fruit-name">
        The {fruit.name} is {fruit.color}
      </p>

      <p className="fruit-edible">
        {fruit.readyToEat? ' Its is ready to eat ' : ' It is not ready to eat... Cant touch this ' }
      </p>
      </div>
      );
     }
   }


  module.exports  = Show;