<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_d400a01e1d4c14079713564931a23c99($e,$m){

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
