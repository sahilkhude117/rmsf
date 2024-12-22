'use client';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { setUserInfo } from "@/redux/donationSlice";

export const Comment = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: RootState) => state.donation);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setUserInfo({
        isComment: e.target.checked,
        comment: userInfo.comment, // Retain existing comment value
      })
    );
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(
      setUserInfo({
        isComment: userInfo.isComment,
        comment: e.target.value, // Update the comment value
      })
    );
  };

  return (
    <div>
      <div className="flex items-center m-5">
        <input
          type="checkbox"
          id="commentBox"
          checked={userInfo.isComment}
          onChange={handleCheckboxChange}
          className="w-5 h-5 text-blue-500 border-gray-300 rounded cursor-pointer focus:ring-blue-500 mr-3"
        />
        <label htmlFor="commentBox" className="text-gray-700">
          Write us a comment
        </label>
      </div>
      {userInfo.isComment && (
        <div className="m-5">
          <textarea
            placeholder="Your comment"
            value={userInfo.comment || ""}
            onChange={handleCommentChange}
            className="block w-full px-3 py-2 bg-transparent border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
      )}
    </div>
  );
};
