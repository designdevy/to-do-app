import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { PieChart, Pie, Cell } from "recharts";
import { styles } from "./StylesForToDo";
import { Typography } from "@material-ui/core";

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

  const COLORS = ["#6675D5", "#8AC926", "#FF8042"];

  const percent = Math.round((checked.length * 100) / toDos.length);

  return (
    <div className={classes.chartBlock}>
      <Typography variant="h4" align="center" className={classes.headerText} gutterBottom>
        You statistics for today
      </Typography>
      
      <PieChart width={200} height={200} className={classes.chart}>
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
          onMouseOver={() => console.log("Ho")}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <span className={classes.percentage}>{`${percent}% DONE`}</span>
      <Typography variant="h6" align="left" className={classes.headerText} gutterBottom>
        <span className={classes.redDot}></span>High priority tasks left
      </Typography>

      <Typography variant="h6" align="left" className={classes.headerText} gutterBottom>
        <span className={classes.greenDot}></span>Other tasks left
      </Typography>

      <Typography variant="h6" align="left" className={classes.headerText} gutterBottom>
        <span className={classes.blueDot}></span>Tasks done
      </Typography>
    </div>
  );
});
