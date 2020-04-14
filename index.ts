import axios from '@services/axios';

// 指标新增
export const createIndicator = params => axios.post('/comment-index', params);

// 评分表指标编辑
export const editMarksheetTarget = params => axios.put('/comment-index', params);

// 查询指标名对应的指标等级
export const inquireTargetGrade = params => axios.post('/comment-index/level/rule', params);

// 删除指标
export const deleteTarget = params => axios.delete('/comment-index/{id}', params);

// 查询评分指标
export const inquireMarkTarget = params => axios.get('/comment-indexes/page', params);

// 指定id评分指标的详情查询
export const inquireDesignatedMarkTarget = params => axios.get('/comment-indexes/{id}', params);

// 根据评分指标id，所有与之关联的评分卷查询
export const inquireAllRelatedMark = params =>
    axios.get('/comment-indexes/{id}/comment-papers', params);