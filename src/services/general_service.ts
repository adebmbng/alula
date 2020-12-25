import {useQuery} from 'react-query';

import {GetBannerListResponse} from '../entities/api';

export const useBannerList = () => {
  return useQuery('useBannerList', async () => {
    return Promise.resolve({
      code: 200,
      data: [],
      message: 'success',
    } as GetBannerListResponse).then((res) => res.data);
  });
};
