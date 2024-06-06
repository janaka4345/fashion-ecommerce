import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
export default function UserAvatar({ session }) {
  return (
    <Avatar>
      <AvatarImage src={session.user.image} alt="avatar" />
      {/* Get the first two letters of the name */}
      <AvatarFallback>
        {session.user.name.substring(0, 2).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}
