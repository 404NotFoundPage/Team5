/**
 * Created by fengb on 2018/5/4.
 */

var  multer=require('multer');
var storage = multer.diskStorage({
    //�����ϴ����ļ�·����uploads�ļ��л��Զ�������
    destination: function (req, file, cb) {
        cb(null, './管理系统/2018.5.5CMS/Team5/public/images/buyerImg')
    },
    //���ϴ��ļ�����������ȡ��Ӻ�׺��
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        // cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
        cb(null, 'buyer-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
});
//��������ļ���muler����
var upload = multer({
    storage: storage
});

//�����������ã���ο�multer��limits,ʹ�÷������¡�
//var upload = multer({
//    storage: storage,
//    limits:{}
// });

//��������
module.exports = upload;