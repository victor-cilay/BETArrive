<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_4d4f6071723e3bb49fcf658cb1a25250($e,$m){

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