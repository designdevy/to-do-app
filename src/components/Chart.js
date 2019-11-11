import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { PieChart, Pie, Cell } from "recharts";
import { styles } from './StylesForToDo'

export default withStyles(styles)(function Chart({ classes, toDos, checked }) {
  const importantTasks = toDos.filter(
    toDo => toDo.importance === true && !checked.includes(toDo.id)
  );

  const data = [
    { name: "Tasks done", value: checked.length },
    {
      name: "Medium importance left",
      value: toDos.length - checked.length - importantTasks.length
    },
    { name: "High importance tasks left", value: importantTasks.length }
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FF8042"];

  return (
    <PieChart width={800} height={400} className={classes.chart}>
      >
      <Pie
        data={data}
        cx={100}
        cy={100}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        onMouseOver={() => console.log('Ho')}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
        
    </PieChart>
  );
});
