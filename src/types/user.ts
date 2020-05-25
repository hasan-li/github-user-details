export interface TUser {
  login: string;
  id: SVGAnimatedNumberList;
  avatar_url: string;
  html_url: string;
  repos_url: string;
  name: string;
  public_repos: string;
}

export interface TFetchUsersAction {
  type: string;
  data: TUser[];
}

export interface TUsersLoadingAction {
  type: string;
  loading: boolean;
}

export interface TUsersLastReceivedAction {
  type: string;
  lastIdReceived: number;
}
