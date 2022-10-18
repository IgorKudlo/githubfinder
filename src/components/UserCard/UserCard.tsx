import { UserStat } from '../UserStat';
import { LocalGithubUser } from 'types';

import styles from './UserCard.module.scss';
import {UserTitle} from '../UserTitle';
import {UserInfo} from '../UserInfo';

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img
      src={props.avatar}
      alt={props.login}
      className={styles.avatar}
    />
    <UserTitle
      login={props.login}
      name={props.name}
      created={props.created}
    />
    <p className={`${props.bio}${props.bio ? '' : `${styles.empty}`}`}>
      {props.bio || 'This profile has no bio'}
    </p>
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
    <UserInfo
      company={props.company}
      blog={props.blog}
      location={props.location}
      twitter={props.twitter}
    />
  </div>
);
