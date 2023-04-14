<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_9d6933cb75e694b1a2b71bd2f5604888($e,$m){

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
