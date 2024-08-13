import {createSlice} from "@reduxjs/toolkit";
import {Comment} from "@/types/Comment";
import {CommentsState} from "@/types/CommentsState";
import {CommentType} from "@/types/CommentType";

const initialState: CommentsState = {
    readComments: null,
    unreadComments: null,
    deleteRequestSending: false,
    changeReadTypeRequestSending: false,
    page: null,
    value: null,
    onPageCount: null,
    totalCount: null,
};

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        setCommentsSearchData: (state, action) => {
            const {page, value} = action.payload;
            state.page = page;
            state.value = value;
        },
        setCommentsSearchValue: (state, action) => {
            state.value = action.payload;
        },
        setCommentsPage: (state, action) => {
            state.page = action.payload;
        },
        setCommentsData: (state, action) => {
            const {comments, commentsOnPageCount, totalCommentsCount} = action.payload;
            comments.map((item: Comment) => item.isSelected = false);

            state.unreadComments = comments.filter((item: Comment) => item.isUnread);
            state.readComments = comments.filter((item: Comment) => !item.isUnread);
            state.onPageCount = commentsOnPageCount;
            state.totalCount = totalCommentsCount;
        },
        removeComment: (state, action) => {
            const {idToRemove, commentType} = action.payload;

            if (!state.unreadComments || !state.readComments) return;
            if (commentType === CommentType.Unread)
                state.unreadComments = state.unreadComments.filter(item => item.id !== idToRemove);
            else state.readComments = state.readComments.filter(item => item.id !== idToRemove);
        },
        changeCommentReadType: (state, action) => {
            const {idToChange, commentType} = action.payload;
            const targetCommentsList = commentType === CommentType.Unread ? state.unreadComments : state.readComments;
            const oppositeCommentsList = commentType === CommentType.Unread ? state.readComments : state.unreadComments;

            if (!targetCommentsList || !oppositeCommentsList) return;

            const commentsItemIndex = targetCommentsList.findIndex(item => item.id === idToChange);
            if (commentsItemIndex === -1) return;

            const [item] = targetCommentsList.splice(commentsItemIndex, 1);
            item.isSelected = false;

            oppositeCommentsList.push(item);
            oppositeCommentsList.sort((a, b) => b.createdAt - a.createdAt);

            state[commentType === CommentType.Unread ? 'unreadComments' : 'readComments'] = targetCommentsList;
            state[commentType === CommentType.Unread ? 'readComments' : 'unreadComments'] = oppositeCommentsList;
        },

        setCommentDeleteRequestSending: (state, action) => {
            state.deleteRequestSending = action.payload;
        },
        setCommentChangeTypeRequestSending: (state, action) => {
            state.deleteRequestSending = action.payload;
        },
        setReadComments: (state, action) => {
            state.readComments = action.payload;
        },
        setUnreadComments: (state, action) => {
            state.unreadComments = action.payload;
        },
        changeSelectedCommentsReadType: (state, action) => {
            const readType = action.payload;

            if (!state.unreadComments || !state.readComments) return;

            let targetList = readType === CommentType.Unread ? state.readComments : state.unreadComments;
            const oppositeList = readType === CommentType.Unread ? state.unreadComments : state.readComments;

            const itemsToAdd = targetList.reduce((acc: Comment[], item: Comment) => {
                if (item.isSelected) return [...acc, item];
                else return acc;
            }, []);
            targetList = targetList.reduce((acc: Comment[], item: Comment) => {
                return !item.isSelected ? (acc.push(item), acc) : acc;
            }, []);

            oppositeList.push(...itemsToAdd);

            state[readType !== CommentType.Unread ? 'unreadComments' : 'readComments'] = targetList;
            state[readType == CommentType.Unread ? 'unreadComments' : 'readComments'] = oppositeList.sort((a, b) => b.createdAt - a.createdAt).map((item) => ({
                ...item,
                isSelected: false,
            }));
        }
    }
});

export const {
    setCommentsData,
    removeComment,
    changeCommentReadType,
    setCommentDeleteRequestSending,
    setUnreadComments,
    setReadComments,
    setCommentChangeTypeRequestSending,
    changeSelectedCommentsReadType,
    setCommentsSearchData,
    setCommentsSearchValue,
    setCommentsPage,
} = commentsSlice.actions;

export default commentsSlice.reducer;
