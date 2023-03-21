import createApiHandler from './apiHandler';
import createRequestHandler from './requestHandler';
import './upgrade';

if (typeof window !== 'undefined') {
  window.IS_BACKGROUND = true;
}

// 开始初始化
createApiHandler();
createRequestHandler();
