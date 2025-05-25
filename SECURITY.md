# Security Policy

## Deployment Security

### GitHub Actions Security Measures

1. **Limited Permissions**: The workflow uses minimal required permissions:
   - `contents: read` - Only read repository contents
   - `deployments: write` - Create deployment status
   - `pull-requests: write` - Update PR status

2. **Environment Protection**: Uses GitHub environment protection for production deployments

3. **Conditional Execution**: Only deploys on:
   - Direct pushes to `main` branch
   - Merged pull requests to `main` branch

### Cloudflare API Token Security

**Required Permissions** (Principle of Least Privilege):
- `Cloudflare Pages:Edit` - Deploy to Pages
- `Account:Read` - Read account information

**Token Scope**:
- Account: Your specific account only
- Resources: Cloudflare Pages only

### GitHub Secrets

The following secrets are required and should be configured in repository settings:

- `CLOUDFLARE_API_TOKEN` - Cloudflare API token with limited permissions
- `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare account ID (not sensitive but kept as secret for consistency)

### Security Best Practices

1. **Token Rotation**: Rotate Cloudflare API tokens regularly (every 90 days recommended)
2. **Monitor Access**: Review Cloudflare audit logs for API token usage
3. **Branch Protection**: Enable branch protection rules on `main` branch
4. **Review Dependencies**: Regularly audit npm dependencies for vulnerabilities

### Incident Response

If you suspect a security breach:

1. **Immediately revoke** the Cloudflare API token
2. **Check** Cloudflare audit logs for unauthorized access
3. **Review** recent deployments and changes
4. **Generate** a new API token with fresh permissions
5. **Update** GitHub repository secrets

## Reporting Security Issues

If you discover a security vulnerability, please report it privately to the repository maintainers. 