import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
// import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>


        DeveloperTown
        2013-Present
        Developer
        At DeveloperTown, I work as a full-stack developer, though my focus is on front-end. My projects usually consist of Ruby on Rails/PostgreSQL/HAML/SCSS/CoffeeScript/React.

        KA+A
        2012-2013
        Interaction Designer	At KA+A, I designed and developed websites and web applications for several clients, including ExactTarget (HubExchange), ACES Power, and Angie’s List (Big Deal).


        Right On Interactive
        2011-2012
        Interactive Marketing Manager	At Right On Interactive, I designed and implemented a new branding strategy including logo and website. I also redesigned ROI's web application, Customer Lifecycle Marketing. My other duties included creation of HTML emails and marketing materials.

        Kemper Technology Consulting
        2010-2011
        Web Designer/Developer	At Kemper, I worked with external and internal clients to create websites, email newsletters, and print collateral. I designed and developed websites using WordPress, Magento for great clients, such as Bucks & Jakes, Valley Cash 'n' Carry, Hoosier Accounts, and Sonitrol.

        University of Evansville
        2008-2010
        Manager of Digital Media	At the University of Evansville, I was in charge of implementing a new website for the university, creating HTML email alerts, digital signage, and video advertisements. I worked closely with all educational and administrative departments to create a consistent look and feel for all University web pages.

        Dell, Inc.
        2007-2008
        Senior Account Manager	At Dell, Inc., I was on the phone with customers assiting them with their computer, server, and software needs. I had $1.7 million in sales (over 100% of quota every month).

        Ball State University
        2003-2007	Bachelor’s of Arts Telecommunications, Multimedia focus
        Minor in Marketing


        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          {/* <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}> */}
          <ExpansionPanelSummary>
            <Typography className={classes.heading}>General settings</Typography>
            <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          {/* <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}> */}
          <ExpansionPanelSummary>
            <Typography className={classes.heading}>Users</Typography>
            <Typography className={classes.secondaryHeading}>
              You are currently not an owner
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
              diam eros in elit. Pellentesque convallis laoreet laoreet.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          {/* <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}> */}
          <ExpansionPanelSummary>
            <Typography className={classes.heading}>Advanced settings</Typography>
            <Typography className={classes.secondaryHeading}>
              Filtering has been entirely disabled for whole web server
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
              eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);
