import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "./List";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400,
  },
}));
const Wrapper = styled.div`
  background: #fff;
  width: 100%;
`;

const renderTree = (nodes) => (
  <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
    {Array.isArray(nodes.children)
      ? nodes.children.map((node) => renderTree(node))
      : null}
  </TreeItem>
);

const NavigationList = ({ items }) => {
  const classes = useStyles();
  return (
    <Wrapper className="navigation-list">
      <List
        items={items}
        showList={true}
        render={(item) => <div key={item._id}>{renderTree(item)}</div>}
      />
      {/* <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpanded={["root"]}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {renderTree({
          id: "root",
          name: "Parent",
          children: [
            {
              id: "1",
              name: "Child - 1",
            },
            {
              id: "3",
              name: "Child - 3",
              children: [
                {
                  id: "4",
                  name: "Child - 4",
                },
              ],
            },
          ],
        })}
      </TreeView> */}
    </Wrapper>
  );
};

export default NavigationList;
