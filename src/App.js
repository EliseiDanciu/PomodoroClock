import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Break from "./components/Break";
import Session from "./components/Session";
import Timer from "./components/Timer";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<div className="container">
						<h1 className="text-center display-2">POMODORO CLOCK</h1>
						<div className="card card-body row">
							<Timer />
						</div>
						<div className="row mt-100">
							<div className="card card-body w-50 mx-auto py-50">
								<Break />
							</div>
							<div className="card card-body card-block w-50 mx-auto">
								<Session />
							</div>
						</div>
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
