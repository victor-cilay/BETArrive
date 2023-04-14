<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_9cd570a255df4bb299b9e30100339e6a($e,$m){

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
return sg_load('E49C7E5AEF2ACC56AAQAAAAXAAAABNAAAACABAAAAAAAAAD/yWxcWqTw6fQOwlFbXfksy2i8jSsb3KpWFowRYv+jb4oeWAO1pbdsNyzrDNjNvs3gtdYlKCkekRYfFXznvUVSYnrqHDnLMLAcWM6dzAxXJX36HJmU7rP7uDYKtwv3AmCVW3KWjhMK5+pGmz0319XVce1W/Y4/YW7aSCCKYxq/6QTjFh0HGGC/3ojprqUP4aiUaAkryrSGSeVhHen6Ck+VkzHYERpXahc/DKFhwB/uehKLvlLGDOeGgS8vMb556YEEdXIt0Do+85WAj+PvkbpdQAcAAAAoAgAA6XaGiRkkO1BVSpIrpkcC7ZlM/1rWeLaQ1SqHgoG2BAi/zIcN2SRlABgS9H9MdYXboG44r5aI4NKBJqN9ymOvgCJnvwKOu+WsZADeeO+tB+rYmUoazk9hrS2xsNLs+WZhX77XqOq1KfozomQjNwnM4PnzPsqQHBM/qsgmWxty0t/ge7cXPUH5Ld47UGGgjL9wJyE5tHOef+HtBpHXc3jFPwuFuM4l+K2C+wBOfctXtWCIs224OPvSHVc+UIzv1lRY+DVBihMwHT76UgN87Y2H6EuKubLCZvdiufeasd5QISC920en3Wr7PSlK3Gmd5xca8+bwfg2gx0tzWmWYnyNtoGwvND30ZGJ3XH9B4Z5IqXbRPDWwG8Zi5h695UhnpvTOo9zSKSsztrsJxc7jgT796mSl+h95U9NATdV9Nv/gPvyWCUYRr9zlkfJoJec2h1egLYaCtZxc8ONqqa0yMeSlz6LuDswG7+Xtbn8JlqhJqQtx5Fe99h5qEZDl/UWL33BhRdtFlWBYM82JYAyONC60WDMQHnYLr1JxCBcmmM7SpUaY71pMpPXR4+Od2wuf7NWf2ANK1pPr1NR5G7ZF7/oAGXsxS++uvKOSrF6N8tkVvsJuJBoGICNZiJFLpzMx0TnI7Ab7FTZhHeBzW+oRHn4m9C9U8+cndJUmit5u8+qMz/8xPHTWeis8MiUHGqLsWTO0+4JIKpFLENIOtNhwxObUmPQIgif7UUIKRwAAACgCAABiosbdhUoV/joy7R3oLwaru9ENYeJjwZFfTi76BTxhpRTNx/prUkRBDtxa0rVInGw2A1i81OHcOhi/wj/VCBnXuupofnMd6qygYQHY93cezuIyjgkDMbC4WFi8bfv/F03zK+fY6k1+1RPJ5lb1VU8ZFrMRs/4DkNtqjK4ytKxaJCeFtR4wHeVwe42M+mRB2NS3YqyHK+RkIO6tDvZ7U1B11/Fe+bB3K+AJSRjJcbnTkTCdcT2vP9+M0geL9Rsvrh+O2buNI9aCjn88tpC165W+Pa1AUCRbuIY7PKtWj7iLxbJvyVr5LGe6amrvORIw/UsziRbOJhAvQc30yaHhlGJzEsXoKLHoKoTstRRnA4ue1OUPG5v3v3gxKIKS7h1RlMaiWJobNBcxrE/dXjdzaTJ2ueKGdkvsCBy2w4HclL4FP+DLq3Yw5JM2BcuuTBKqjRm4QDVKjKQfaOJwn0NBofkP8+ooZamrVSknrq4mUir2kBEcayg+xG0DT1OvRXCyGpUzkSU33qX0TbGpMdTpa9QgpEU5S0letU+h7KpPsMT/tJ7+wVJeXPm7QWYq0jZKbsmShYV/1UcIOkJK3FchTHjfS/8LUHp5JXgDCc1k1x0PqGRt5ZkQYZ4EYnnDuoC6JyYqjiDU3ZkXXM3RQi55xWr7dss6TBkzxazSD+9JhDOH4Q9yoDtk0yyNcyTJUT4wjI1VAVS3+cMN3r9twZlX/Gt8+YbQ5rLmr0tIAAAAKAIAABYrw4F3INo7bF+2u6msxjGsPRT7r834241Pyk3Ur4E2zyWXHonb6F4wxJD3y9Y7W9/cUEChYY/pkwX5MZKb/kdFG4vmHVJALGvquFqDhWJ6FzWMSt7gK26GFmSJxAx0N+yUzfN/LQuPnxHl+cqVa35Eusde3aFXhZjGVof05c/c7e24/DYYAndjmf2Qvdto9s8YSvqKQdH3I55AkPWxhxLZlVgA7QGfNoRt2aq7rP3Gpz2ndhfNxz0+SJAzxhZ0Rt9QCNYFMsW2OZBtty5+UW1gCxeLRcumAUKtDPeNkeq8X3NSIYjF0OWLZWoMhguTD/CwDb4E+P2GxJ/+b+QquV+J0jAfrKEHyt6vjTe1mjVsjdiXdhvHh6SHJnmBUSbETGbCvazPLmu508fB5fnIY0bHQxFY2eA4LI3Dwkvhos9+7dm3jR9kGWe5s6Fck9/gk5cg9Ub/B3hxvoSQY/jXPeoeTXKFLWlClylrZNk8SXUiIWR1zcPjwb95VDV7nM7CZzVKplhQCjtYb7DxO3g183DA5Ysq6k6n8IU8pSq7E0WLRw762py2DiTES4N/92yr0YFLAbd8iwQPnVmBRG/O0f07Cubh3sgMR4mJJl8vOcSoaQAEMVzlj/uBYz2bg0vfKh6s00yGXq+jjLLsGmtk+BAE4QbsClu+pfL+1tzmvXAsG8tdldLsuAqWh5XhaWLOJXPp0WxL5c6696cbCdeASQYc0MEwnTfxQ0kAAAAgAgAAD/q6dTxzO2uXeRybzEyDFWWwXqp64pp/4WQlVA0PSomKUqK7qluiIhsPU28LiBEaSSr3ycNHsSWjwOgbb+n10cVXg27i1j7kOPl28Bw08uPAoiCorbwovXTiihpGWwtBbHGXM69/HuQ/1Chu7fyo806gZdftwt6x16Q5AsAV0VrHNOyVkPd0+aoCoDReqfVF4+11t6XkbczpgDH7yLeVwnio49fArQyTLM9BesNDmq71J2hqYK6I0rUJaDdnjYd5a3cwFgiNOYbjeY+gMMucHOVVh0NzOFxFENvUXOUP3ugwvLcUjqxS9qnp6C4NCJSZiSasaCWTJfdzJ3K6NWRZmiv53P6w01xDlyyF6XorXcT+X6PHFsLGpr1c1izpAM/AL+UDDtMvFWAfQtLc/K+o+2TqPVC9TcsclMg9/JSRVVWqIZzP+cl/KxHSPv1INK2OvCYd3gtl663g5/sBExyAETl5ne8va3mdpr6+F9AR/Lp+cSCIWjwI7MDKIBa1LUsUAZSzJMq0d7QAtGJtjTe0QfGcCkde2S30i6gJdZPH8SpVkR7K8MlaGdjEV4/el7qKThYkuXKJuprkU3PW8wYaoxVHjrDuYg+L0YFIwxRThEx9skwwyPBxBSxIRNYkK+W2FYuvJx7/MGoDnGHPQlS4nFGSMiTmpu3jyWlqrXHVe65JPvlJOFD7TgWjJH5IwwcLosJc3lZrFuemUp/m61CBM0oAAAAgAgAAJ8ahgi0tMLGjPY/D8P6nF8OemovKBFNwrh120dLRgcOX4kOGQX/ENtX9ueT3Fl2Ddqn0DGrI0adnwLKcrnE7xsYuTPMa3WsLZ39iB6faBrRgqvMxHY/G7d3MlfVgNhibkERf7tNtsFeoVbWjUOihqZYpZBI7mDRKgIh9kfEKSdRja0KkpNQoWk8VURS5MeamvhOxHaoXE9J0YgSWtqwMJqE36xND5dxAslY3JtT2+P8RNirc9q4KBrTi5MCdE5XKN1hVnG5FyI8qxMsiBCcbHks+XD7KeCZGxBlKtaD+VGuivT74a5+QV9Y8NBYpMaS9irgyhDUaikfyRTXdM9y8w9w3WME5r5t2rs4RogyLJWhgtpOX3SwFo7TRcIY/voQ6P8RRQClMgheAH1kYsxGyMQDs1pzF3d5A8k1mx9r9J2f/6B+W2vsMxLzG1M9F7hsXUJj7kJ/o6fwQ6E5R24UWLfY3593UdIT9v/P1GRwPexksabn2ssSl67AQhnK8TnRaAX5iDDxS2pWZB2lC1RRNU97jdwZoWLsJrPTnDoO6IxAT2oBhgUyz5yhkSiUhKYtqBZWkMFYpfUhcrHrL/mzkcbfhURJoxqjm9riU5EI+CKNkNHSBkihjaUMAchdKyGlU11uAmY1/qD8nKUOarDwZzA3Krto0pihrVMluo4TAym5ur/wkqlhT/ZvebrtCOI4K6hXjHj+QLX0piV2pzoCUKgAAAAA=');
