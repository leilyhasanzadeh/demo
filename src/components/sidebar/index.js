import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Box, TextField, } from '@mui/material';
import { withTranslation } from "react-i18next";
import { useNavigate, } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchCommentList } from "root/store/thunks/comment";
import { Drawer } from "./style";

function SidebarContainer({ opensidebar, handleSidebarClose, order, t, ...props }) {

  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const commentList = useSelector(state => state.comment.commentList);
  const postSelected = useSelector(state => state.post.postSelected);

  let navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCommentList());
  }, [])

  useEffect(() => {
    setItems(commentList[postSelected] ? commentList[postSelected] : []);
  }, [commentList, postSelected])

  return (
    <Drawer
      className='shrink-0	whitespace-nowrap	box-border relative'
      variant="permanent"
      anchor="left"
      PaperProps={{
        className: "!overflow-x-hidden !sticky !border-l-0 !w-full",
      }}
      open={opensidebar}
      order={order}
    >
      <div className='h-full'>
        <div className='h-[calc(100vh-5rem)] px-2'>
          <List className='overflow-auto'>
            {items.map((comment, index) => (
              <ListItem button className='flex items-start flex-row !items-center !px-3 !bg-neutral-100 !mb-2 !rounded' key={index}>
                <ListItemText
                  onClick={() => {
                  }}
                >
                  <div className="text-xs leading-5 flex align-center overflow-hidden	text-ellipsis	">
                    <div className='w-4 h-4 inline-block mr-3 rounded-full' style={{
                      backgroundColor: "#" + ((1 << 24) * Math.random() | 0).toString(16)
                    }}>
                    </div>
                    {comment?.name}
                  </div>
                  <p className="text-xs whitespace-normal	ml-6">{comment?.body}</p>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </Drawer>
  );
}

export default withTranslation()(SidebarContainer);