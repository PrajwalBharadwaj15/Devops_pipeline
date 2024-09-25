output "cluster_name" {
  value = aws_eks_cluster.main.name
}

output "kubeconfig" {
  value = aws_eks_cluster.main.kubeconfig
}
