import { httpAxios } from "@/helper/httpAxios";

// this function is used for the calling of all api.

//  call addtask api.
export async function addTask(task) {
  const result = await httpAxios
    .post("/api/tasks", task)
    .then((response) => response.data);

    return result;
}
