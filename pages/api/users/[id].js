import { users } from "@/data";

export default function handler({query:{id}}, res) {
    const filtered = users.filter((user)=>user.id === Number(id))
  res.status(200).json(filtered[0]);
}
