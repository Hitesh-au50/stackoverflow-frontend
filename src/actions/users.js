import * as api from "../api";

export const fetchAllUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getAllUsers();
    dispatch({ type: "FETCH_USERS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
// export const updateProfile = async (req, res) => {
//   const { id: _id } = req.params;
//   const { name, about, tags } = req.body;

//   if (!mongoose.Types.ObjectId.isValid(_id)) {
//     return res.status(404).send("question unavailable...");
//   }

//   try {
//     const updatedProfile = await users.findByIdAndUpdate(
//       _id,
//       { $set: { name: name, about: about, tags: tags } },
//       { new: true }
//     );
//     res.status(200).json(updatedProfile);
//   } catch (error) {
//     res.status(405).json({ message: error.message });
//   }
// };

export const updateProfile = (id, updateData) => async (dispatch) => {
  try {
    const { data } = await api.updateProfile(id, updateData);
    dispatch({ type: "UPDATE_CURRENT_USER", payload: data });
  } catch (error) {
    console.log(error);
  }
};
