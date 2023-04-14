<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_ed99c82e490786d99dc8671cc7056b38($e,$m){

    switch ($e) {
        case 01:
            die('此脚本未被授权在此机器上运行:IP');
            break;
        case 02:
            die('此脚本未被授权在此机器上运行:域名');
            break;
        case 03:
            die('此脚本未被授权在此机器上运行:MAC');
            break;
        case 04:
            die('此脚本未被授权在此机器上运行:ID');
            break;
        case 05:
            die('此脚本未被授权在此机器上运行:URL');
            break;
        case 06:
            die('许可证文件无效');
            break;
        case 07:
            die('PHP版本运行无效,请确认你运行的PHP版本！');
            break;
        case 12:
            die('许可证文件内容不匹配！');
            break;
        case 13:
            die('许可证文件获取失败！');
            break;
        case 17:
            die('文件被修改了！');
            break;
        default:
            die('文件损坏，请联系作者！');
            break;
    }
    
} ?><?php
return sg_load('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');
