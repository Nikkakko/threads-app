import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/button';

interface Props {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
  members: {
    image: string;
  }[];
}

function CommunityCard({ id, name, username, imgUrl, bio, members }: Props) {
  return <article></article>;
}

export default CommunityCard;
