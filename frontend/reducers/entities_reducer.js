import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import postsReducer from './posts_reducer';
import tagsReducer from './tags_reducer';
import postToTagsReducer from "./post_to_tags_reducer";
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  tags: tagsReducer,
  postToTags: postToTagsReducer,
  comments: commentsReducer
});

export default entitiesReducer;