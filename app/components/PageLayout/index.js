import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CreateLayout(props) {
  const { classes } = props;
  const layout = props.layout;
  let page = [];

  if(layout === "frontPage"){
    console.log("frontPage")
  }

  for(let i = 0; i < props.children.length; i++){
    page.push(
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          {props.children[i]}
        </Paper>
      </Grid>
    )
  }
  return page;
}

function render(props){
  const { classes } = props;

  return (
    <div className={classes.root} style={{ padding:24 }}>
      <Grid container spacing={24}>

        {CreateLayout(props)}

      </Grid>
    </div>
  );
}


CreateLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(render);
