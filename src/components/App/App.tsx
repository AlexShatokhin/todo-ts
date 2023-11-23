
import ItemsList from '../ItemsList/ItemsList';
import AddItemForm from '../forms/AddItemForm/AddItemForm';
import FilterForm from '../forms/FilterForm/FilterForm';

import './App.scss';
function App() {

  return (
	<div className="App">

		<div className="btns">
			<FilterForm />
			<AddItemForm />
		</div>

		<ItemsList />
	</div>
  );
}


export default App;
