module.exports = {
  documentation: [
    "index",
    {
      type: "category",
      label: "Evaluate",
      collapsed: false,
      link: {
        type: "doc",
        id: "evaluate/index",
      },
      items: [
        "evaluate/why-temporal",
        "evaluate/major-components",
        {
          type: "category",
          label: "Development features",
          collapsed: true,
          link: {
            type: "doc",
            id: "evaluate/development-features/index",
          },
          items: [
            "evaluate/development-features/core-application",
            "evaluate/development-features/temporal-client",
            "evaluate/development-features/failure-detection",
            "evaluate/development-features/throughput-composability",
          ],
        },
        "security",
        "evaluate/release-stages",
        {
          type: "link",
          label: "Change-log",
          href: "https://temporal.io/change-log",
        },
      ],
    },
    {
      type: "link",
      label: "Get started",
      href: "https://learn.temporal.io/getting_started/",
    },
    {
      type: "category",
      label: "Develop",
      collapsed: false,
      link: {
        type: "doc",
        id: "dev-guide/index",
      },
      items: [
        {
          type: "category",
          label: "Go SDK",
          collapsed: true,
          link: {
            type: "doc",
            id: "dev-guide/golang/index",
          },
          items: [
            "dev-guide/golang/foundations",
            "develop/go/temporal-client",
            "dev-guide/golang/features",
            "dev-guide/golang/cancellation",
            "dev-guide/golang/observability",
            "dev-guide/golang/testing",
            "dev-guide/golang/debugging",
            "dev-guide/golang/versioning",
            "dev-guide/golang/converters",
          ],
        },
        {
          type: "category",
          label: "Java SDK",
          collapsed: true,
          link: {
            type: "doc",
            id: "dev-guide/javalang/index",
          },
          items: [
            "dev-guide/javalang/introduction",
            "dev-guide/javalang/project-setup",
            "dev-guide/javalang/durable-execution",
            "dev-guide/javalang/foundations",
            "develop/java/temporal-client",
            "dev-guide/javalang/features",
            "dev-guide/javalang/observability",
            "dev-guide/javalang/testing",
            "dev-guide/javalang/debugging",
            "dev-guide/javalang/versioning",
            "dev-guide/javalang/converters",
          ],
        },
        {
          type: "category",
          label: "PHP SDK",
          collapsed: true,
          link: {
            type: "doc",
            id: "dev-guide/phplang/index",
          },
          items: [
            "dev-guide/phplang/foundations",
            "dev-guide/phplang/features",
            "dev-guide/phplang/observability",
            "dev-guide/phplang/testing",
            "dev-guide/phplang/debugging",
          ],
        },
        {
          type: "category",
          label: "Python SDK",
          collapsed: true,
          link: {
            type: "doc",
            id: "dev-guide/python/index",
          },
          items: [
            "dev-guide/python/introduction",
            "dev-guide/python/project-setup",
            "dev-guide/python/durable-execution",
            "dev-guide/python/foundations",
            "dev-guide/python/features",
            "dev-guide/python/observability",
            "dev-guide/python/testing",
            "dev-guide/python/debugging",
            "dev-guide/python/versioning",
            "dev-guide/python/converters",
          ],
        },
        {
          type: "category",
          label: "TypeScript SDK",
          collapsed: true,
          link: {
            type: "doc",
            id: "dev-guide/tscript/index",
          },
          items: [
            "dev-guide/tscript/introduction",
            "dev-guide/tscript/project-setup",
            "dev-guide/tscript/durable-execution",
            "dev-guide/tscript/foundations",
            "dev-guide/tscript/features",
            "dev-guide/tscript/observability",
            "dev-guide/tscript/testing",
            "dev-guide/tscript/debugging",
            "dev-guide/tscript/versioning",
          ],
        },
        "dev-guide/activity-retry-simulator",
        "dev-guide/worker-performance",
      ],
    },
    {
      type: "category",
      label: "Deploy to production",
      collapsed: false,
      link: {
        type: "doc",
        id: "production-deployment/index",
      },
      items: [
        {
          type: "category",
          label: "Temporal Cloud",
          collapsed: true,
          link: {
            type: "doc",
            id: "production-deployment/cloud/index",
          },
          items: [
            {
              type: "category",
              label: "Introduction",
              collapsed: true,
              link: {
                type: "doc",
                id: "production-deployment/cloud/introduction/index",
              },
              items: [
                "production-deployment/cloud/introduction/security",
                "production-deployment/cloud/introduction/service-availability",
                "production-deployment/cloud/introduction/limits",
                "production-deployment/cloud/introduction/sla",
                "production-deployment/cloud/introduction/pricing",
                "production-deployment/cloud/introduction/support",
              ],
            },
            "production-deployment/cloud/get-started",
            {
              type: "category",
              label: "Account setup",
              collapsed: true,
              link: {
                type: "doc",
                id: "production-deployment/cloud/account-setup/index",
              },
              items: [
                "production-deployment/cloud/account-setup/certificates",
                "production-deployment/cloud/account-setup/namespaces",
                "production-deployment/cloud/account-setup/users",
              ],
            },
            "production-deployment/cloud/api-keys",
            {
              type: "category",
              label: "Metrics",
              collapsed: true,
              link: {
                type: "doc",
                id: "production-deployment/cloud/metrics/index",
              },
              items: [
                "production-deployment/cloud/metrics/general-setup",
                "production-deployment/cloud/metrics/reference",
                "production-deployment/cloud/metrics/datadog",
                "production-deployment/cloud/metrics/prometheus-grafana",
              ],
            },
            "production-deployment/cloud/worker-health",
            "production-deployment/cloud/saml",
            "production-deployment/cloud/operation-api",
            "production-deployment/cloud/terraform-provider",
            "production-deployment/cloud/audit-logging",
            "production-deployment/cloud/export",
            {
              type: "category",
              label: "CLI (tcld)",
              collapsed: true,
              link: {
                type: "doc",
                id: "production-deployment/cloud/tcld/index",
              },
              items: [
                "production-deployment/cloud/tcld/account",
                "production-deployment/cloud/tcld/apikey",
                "production-deployment/cloud/tcld/feature",
                "production-deployment/cloud/tcld/generate-certificates",
                "production-deployment/cloud/tcld/login",
                "production-deployment/cloud/tcld/logout",
                "production-deployment/cloud/tcld/namespace",
                "production-deployment/cloud/tcld/request",
                "production-deployment/cloud/tcld/user",
                "production-deployment/cloud/tcld/version",
              ],
            },
          ],
        },
        "production-deployment/data-encryption",
        "production-deployment/migration",
        {
          type: "category",
          label: "Self-host",
          collapsed: true,
          link: {
            type: "doc",
            id: "production-deployment/self-hosted-guide/index",
          },
          items: [
            "production-deployment/self-hosted-guide/setup",
            "production-deployment/self-hosted-guide/defaults",
            "production-deployment/self-hosted-guide/checklist",
            "production-deployment/self-hosted-guide/security",
            "production-deployment/self-hosted-guide/monitoring",
            "production-deployment/self-hosted-guide/visibility",
            "production-deployment/self-hosted-guide/upgrade-server",
            "production-deployment/self-hosted-guide/archival",
            "production-deployment/self-hosted-guide/multi-cluster-replication",
            "production-deployment/self-hosted-guide/server-frontend-api-reference",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "CLI (temporal)",
      collapsed: true,
      link: {
        type: "doc",
        id: "cli/index",
      },
      items: [
        "cli/activity",
        "cli/batch",
        "cli/cmd-options",
        "cli/env",
        "cli/operator",
        "cli/schedule",
        "cli/server",
        "cli/task-queue",
        "cli/workflow",
      ],
    },
    {
      type: "category",
      label: "References",
      collapsed: true,
      link: {
        type: "doc",
        id: "references/index",
      },
      items: [
        "references/cluster-metrics",
        "references/commands",
        "references/configuration",
        "references/dynamic-configuration",
        "references/errors",
        "references/events",
        "references/failures",
        "references/sdk-metrics",
        "references/server-options",
        "references/web-ui-configuration",
        "references/web-ui-environment-variables",
        "references/web-ui-server-env-vars",
      ],
    },
    {
      type: "category",
      label: "Troubleshooting",
      collapsed: true,
      link: {
        type: "doc",
        id: "troubleshooting/index",
      },
      items: [
        "troubleshooting/blob-size-limit-error",
        "troubleshooting/deadline-exceeded-error",
        "troubleshooting/last-connection-error",
      ],
    },
    {
      type: "category",
      label: "Encyclopedia",
      collapsed: true,
      link: {
        type: "doc",
        id: "encyclopedia/index",
      },
      items: [
        "encyclopedia/temporal",
        {
          type: "category",
          label: "Temporal SDKs",
          collapsed: true,
          link: {
            type: "doc",
            id: "encyclopedia/temporal-sdks",
          },
          items: [
            "encyclopedia/go-sdk-multithreading",
            "encyclopedia/python-sdk-sandbox",
            "encyclopedia/python-sdk-sync-vs-async",
          ],
        },
        "encyclopedia/workflows",
        "encyclopedia/activities",
        {
          type: "category",
          label: "Detecting application failures",
          collapsed: true,
          link: {
            type: "doc",
            id: "encyclopedia/detecting-application-failures",
          },
          items: [
            "encyclopedia/detecting-activity-failures",
            "encyclopedia/detecting-workflow-failures",
            "encyclopedia/retry-policies",
          ],
        },
        "encyclopedia/workers",
        "encyclopedia/child-workflows",
        "encyclopedia/visibility",
        "encyclopedia/clusters",
        "encyclopedia/namespaces",
        "encyclopedia/dataconversion",
      ],
    },
    "glossary",
    // {
    //   type: "autogenerated",
    //   dirName: "./dev-guide", // '.' means the current docs folder
    // },
  ],
  tctl: [
    "tctl-v1/index",
    "tctl-v1/activity",
    "tctl-v1/admin",
    "tctl-v1/batch",
    "tctl-v1/cluster",
    "tctl-v1/dataconverter",
    "tctl-v1/namespace",
    "tctl-v1/schedule",
    "tctl-v1/taskqueue",
    "tctl-v1/workflow",
  ],
};
