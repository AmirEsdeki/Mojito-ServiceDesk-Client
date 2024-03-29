import React, { useEffect, useState } from "react";
import RichTextEditor from "./../../components/wysiwyg/RichTextEditor";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Fade,
  FormHelperText,
  Grid,
  Typography,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Breadcrumb, {
  BreadcrumbTypography,
} from "./../../components/breadCrumb/BreadCrumb";
import { useHistory } from "react-router-dom";
import CustomDivider from "../../components/divider/CustomDivider";
import { ValidatorForm } from "react-material-ui-form-validator";
import { TextValidator } from "react-material-ui-form-validator";
import TicketIssuesService from "../../api/ticketIssues/ticketIssues";
import IssueUrlsService from "../../api/issueUrls/issueUrls";
import PrioritiesService from "../../api/priorities/priorities";
import { Autocomplete } from "@material-ui/lab";
import TicketsService from "./../../api/tickets/tickets";
import LabelPicker from "./../../components/labelPicker/LabelPicker";
import LabelsService from "./../../api/labels/labels";
import Uploader from "./../../components/fileUploader/Uploader";
import Progress from "./../../components/progress/Progress";
import Loading from "../../components/progress/Loading";

const useStyles = makeStyles((theme) => ({
  root: {},
  propsCard: {
    minHeight: "300px",
    padding: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(3),
  },
  buttonArea: {
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
  },
  formMember: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
  },
  formHelper: {
    marginTop: theme.spacing(-1.5),
    color: theme.palette.error.main,
  },
  label: {
    marginTop: theme.spacing(1.5),
    width: "100%",
  },
}));

const NewTicket = (props) => {
  /* -------------------------------- variables ------------------------------- */
  const classes = useStyles();
  const history = useHistory();
  /* -------------------------------------------------------------------------- */

  /* --------------------------------- states --------------------------------- */
  const [model, setModel] = useState({
    title: "",
    issueUrlId: null,
    priorityId: null,
    ticketIssueId: null,
    isMessagePublic: true,
  });
  const [message, setMassage] = useState();
  const [ticketIssues, setTicketIssues] = useState();
  const [issueUrls, setIssueUrls] = useState();
  const [priorities, setPriorities] = useState();
  const [labels, setLabels] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedLabels, setSelectedLabels] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [
    ticketIssueAutoCompleteValues,
    setTicketIssueAutoCompleteValues,
  ] = useState();
  const [
    issueUrlAutoCompleteValues,
    setIssueUrlAutoCompleteValues,
  ] = useState();
  const [
    prioritieAutoCompleteValues,
    setPrioritieAutoCompleteValues,
  ] = useState();
  const dataLoaded = !!ticketIssues && !!issueUrls && !!priorities && !!labels;
  /* -------------------------------------------------------------------------- */

  /* ---------------------------------- refs ---------------------------------- */
  const ticketTitleRef = React.createRef();
  /* -------------------------------------------------------------------------- */

  /* -------------------------------- functions ------------------------------- */

  const onEditorStateChange = (e) => {
    setMassage(e);
  };

  const submitHandler = (e) => {
    (async function () {
      setLoading(true);
      const res = await TicketsService.post({
        ...model,
        message: message,
        labels: selectedLabels,
      });
      if (res.statusCode == 200) {
        history.push("/dashboard/view-conversations", {
          ticketId: res.result.id,
        });
      }
      setLoading(false);
    })();
  };

  async function getData() {
    const ti = await TicketIssuesService.getAll();
    if (ti.result) {
      const ticketIssues = ti.result.items.map((issue) => {
        return { title: issue.title, id: issue.id };
      });
      setTicketIssueAutoCompleteValues(ticketIssues[6]);
      setTicketIssues(ticketIssues);
    }

    const iu = await IssueUrlsService.getAll();
    if (iu.result) {
      const IssueUrls = iu.result.items.map((issue) => {
        return { title: issue.url, id: issue.id };
      });
      //setIssueUrlAutoCompleteValues(IssueUrls[0]);
      setIssueUrls(IssueUrls);
    }

    const p = await PrioritiesService.getAll();
    if (p.result) {
      const priorities = p.result.items.map((issue) => {
        return { title: issue.title, id: issue.id };
      });
      setPrioritieAutoCompleteValues(priorities[2]);
      setPriorities(priorities);
    }

    const l = await LabelsService.getAll();
    if (l.result) {
      const labels = l.result.items.map((issue) => {
        return {
          name: issue.title,
          id: issue.id,
          color: issue.color,
          description: "",
        };
      });
      setLabels(labels);
    }
  }
  /* -------------------------------------------------------------------------- */

  /* ---------------------------------- hooks --------------------------------- */
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    ticketIssueAutoCompleteValues &&
      setModel({
        ...model,
        ticketIssueId: ticketIssueAutoCompleteValues.id,
      });
    issueUrlAutoCompleteValues &&
      setModel({
        ...model,
        issueUrlId: issueUrlAutoCompleteValues.id,
      });
    prioritieAutoCompleteValues &&
      setModel({
        ...model,
        priorityId: prioritieAutoCompleteValues.id,
      });
  }, [
    ticketIssueAutoCompleteValues,
    issueUrlAutoCompleteValues,
    prioritieAutoCompleteValues,
  ]);
  /* -------------------------------------------------------------------------- */
  return (
    <div className={classes.root}>
      <Fade in={!dataLoaded || loading}>
        <div>
          <Loading></Loading>
        </div>
      </Fade>
      <Breadcrumb>
        <BreadcrumbTypography linkText={"ایجاد تیکت جدید"} />
      </Breadcrumb>
      <Typography>
        <strong>ایجاد تیکت جدید</strong>
      </Typography>
      <CustomDivider />
      <Fade in={dataLoaded} timeout={700}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5} md={4}>
            {dataLoaded && (
              <Paper className={classes.propsCard} elevation={1}>
                <ValidatorForm onSubmit={submitHandler} id="contact_form">
                  <TextValidator
                    //size="small"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="ticketTitle"
                    label="عنوان تیکت"
                    name="ticketTitle"
                    autoComplete="ticketTitle"
                    autoFocus
                    validators={["required"]}
                    errorMessages={["این فیلد اجباری است"]}
                    autoComplete="off"
                    onChange={(e) => {
                      setModel({ ...model, title: e.target.value });
                    }}
                    ref={ticketTitleRef}
                    value={model.title}
                  />

                  <Autocomplete
                    value={ticketIssueAutoCompleteValues}
                    onChange={(event, newValue) => {
                      setTicketIssueAutoCompleteValues(newValue);
                      setModel({
                        ...model,
                        ticketIssueId: newValue.id,
                      });
                    }}
                    className={classes.formMember}
                    id="ticket-issue-autocomplete"
                    options={ticketIssues}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextValidator
                        {...params}
                        size="small"
                        label="عنوان تیکت"
                        fullWidth
                        variant="outlined"
                      />
                    )}
                  />

                  <Autocomplete
                    value={issueUrlAutoCompleteValues}
                    onChange={(event, newValue) => {
                      setIssueUrlAutoCompleteValues(newValue);
                      setModel({
                        ...model,
                        issueUrlId: newValue.id,
                      });
                    }}
                    className={classes.formMember}
                    id="issue-url-autocomplete"
                    options={issueUrls}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextValidator
                        {...params}
                        size="small"
                        label="آدرس سامانه موردنظر"
                        fullWidth
                        variant="outlined"
                      />
                    )}
                  />

                  <Autocomplete
                    value={prioritieAutoCompleteValues}
                    onChange={(event, newValue) => {
                      setPrioritieAutoCompleteValues(newValue);
                      setModel({
                        ...model,
                        priorityId: newValue.id,
                      });
                    }}
                    className={classes.formMember}
                    id="ticket-priority-autocomplete"
                    options={priorities}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextValidator
                        {...params}
                        size="small"
                        label="اولویت"
                        fullWidth
                        variant="outlined"
                      />
                    )}
                  />

                  {/* {
                <FormHelperText className={classes.formHelper}>
                  این فیلد اجباری است
                </FormHelperText>
              } */}

                  <LabelPicker
                    className={classes.label}
                    labels={labels}
                    onChange={(e) => {
                      const labelIds = e.map((l) => l.id);
                      setSelectedLabels(labelIds);
                    }}
                  />

                  <Uploader
                    onChange={(e) => {
                      console.log(e);
                      setUploadedFiles(e);
                    }}
                  />
                </ValidatorForm>
              </Paper>
            )}
          </Grid>
          <Grid item xs={12} sm={7} md={8}>
            <RichTextEditor onChange={onEditorStateChange}></RichTextEditor>
          </Grid>
        </Grid>
      </Fade>

      <CustomDivider />

      <Grid
        className={classes.buttonArea}
        container
        alignItems="center"
        component={Paper}
        style={{ height: "60px" }}
        elevation={0}
      >
        <Grid item xs>
          <Button
            form="contact_form"
            className={classes.button}
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            ثبت تیکت
          </Button>
        </Grid>
        <Grid item>
          <Button
            className={classes.button}
            type="submit"
            variant="outlined"
            color="secondary"
            className={classes.submit}
          >
            منصرف شدم
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewTicket;
