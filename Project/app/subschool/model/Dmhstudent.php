<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_9fdde58ec009126a5a971300269990fc($e,$m){

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
