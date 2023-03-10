{
  /* POSTするときに、tokenを付与するための関数 */
}
export const accessToken = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
};
