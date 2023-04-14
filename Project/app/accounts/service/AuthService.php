<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_37aeb40a389d43cbf1fa880f5492a260($e,$m){

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
