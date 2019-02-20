
export const allTodos = ({todos}) => {
	return Object.keys(todos).map(id => todos[id])
	// returns an array of items at each index
};

// if we were to not destructure (pass in entire state)
// export const allTodos = (state) => {
// 	return Object.keys(state.todos).map(id => state.todos[id])
// 	// returns an array of items at each index
// };


// example of store:
// {
// 	entities: {
// 		todos: {
// 			1: {},
// 			2: {},
// 			3: {}
// 		},
// 		users: {
// 			1: {},
// 			2: {},
// 			3: {}
// 		}
// 	},
// 	ui: {}
// }