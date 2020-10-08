import React from "react";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const App = () => (
	<div>
		ReactJS{" "}
		<Button type="primary" icon={<SearchOutlined />}>
			Search
		</Button>
	</div>
);

export default App;
