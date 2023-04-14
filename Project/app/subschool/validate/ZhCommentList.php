<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_93711ff7772ac65e00d53f8b89126310($e,$m){

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
