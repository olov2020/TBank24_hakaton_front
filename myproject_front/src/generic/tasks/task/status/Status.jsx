import statusDone from '../../../../../public/status/statusOk.svg';
import statusFailed from '../../../../../public/status/statusFailed.svg';
import statusProcessing from '../../../../../public/status/statusProcessing.svg';

const Status = ({status}) => {
  return (
    (status === 'done' ?
        <img alt='Done status' src={statusDone}/> :
        status === 'failed' || status === 'cancelled' ?
          <img alt={`${status.charAt(0).toUpperCase() + status.slice(1)} status`} src={statusFailed}/> :
          <img alt='Processing status' src={statusProcessing}/>
    )
  );
};

export default Status;