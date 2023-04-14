<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_cadbcaea855cd0b306533ed0f9265ffd($e,$m){

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
